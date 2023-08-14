import { ReqMethod, ServiceBase } from './service-base';

export class PartnerService extends ServiceBase {
  baseUrl: string = ServiceBase.API_BASE_URL + '/partners';

  /**
   * 取引先一覧の取得
   * @param page ページ番号
   * @param perPage 1ページあたりのデータ数
   * @returns 取引先一覧
   */
  getPartners(
    page: number = 1,
    perPage: number = 100
  ): MfInvoiceApi.PartnersResponse {
    const reqUrl = `${this.baseUrl}?page=${page}&per_page=${perPage}`;
    const method = ReqMethod.get;
    const res = this.fetch(reqUrl, method);
    return this.processResponse(res);
  }

  /**
   * 取引先の作成
   * @param partnerReqBody 取引先
   * @returns 取引先
   */
  createNew(partnerReqBody: MfInvoiceApi.PartnerReqBody): MfInvoiceApi.Partner {
    const reqUrl = this.baseUrl;
    const method = ReqMethod.post;
    const payload = JSON.stringify(partnerReqBody);
    const res = this.fetch(reqUrl, method, payload);
    return this.processResponse(res);
  }

  /**
   * 取引先の取得
   * @param partnerId 取引先ID
   * @returns 取引先
   */
  getPartner(partnerId: String): MfInvoiceApi.Partner {
    const reqUrl = `${this.baseUrl}/${partnerId}`;
    const method = ReqMethod.get;
    const res = this.fetch(reqUrl, method);
    return this.processResponse(res);
  }

  /**
   * 取引先の更新
   * @param partnerId 取引先ID
   * @param partnerReqBody 取引先
   * @returns 取引先
   */
  updatePartner(
    partnerId: string,
    partnerReqBody: MfInvoiceApi.PartnerReqBody
  ): MfInvoiceApi.Partner {
    const reqUrl = `${this.baseUrl}/${partnerId}`;
    const method = ReqMethod.put;
    const payload = JSON.stringify(partnerReqBody);
    const res = this.fetch(reqUrl, method, payload);
    return this.processResponse(res);
  }

  /**
   * 全ての取引先を取得
   * @returns 全ての取引先
   */
  getAll(): MfInvoiceApi.Partner[] {
    const partners: MfInvoiceApi.Partner[] = [];
    let page = 1;
    let totalPages = 1;
    while (page <= totalPages) {
      const partnersRes = this.getPartners(page);
      totalPages = partnersRes.pagination.total_pages;
      if (partnersRes.data.length === 0) {
        break;
      }
      partners.push(...partnersRes.data);
      page += 1;
    }
    console.log(partners.length + '件の取引先取得に成功。');
    return partners;
  }
}
