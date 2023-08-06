/**
 * PaginationData
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/PaginationData
 */
declare class PaginationData {
  public total_count: number;
  public total_pages: number;
  public per_page: number;
  public current_page: number;
}

/**
 * BillingItem
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/BillingItem
 */
declare class BillingItem {
  public id: string;
  public name: string;
  public code: string;
  public detail: string;
  public unit: string;
  public price: string;
  public quantity: string;
  public is_deduct_withholding_tax: boolean;
  public excise: string;
  public created_at: string;
  public updated_at: string;
  public delivery_number: string;
  public delivery_date: string;
}

/**
 * Billing
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/Billing
 */
declare class Billing {
  public id: string;
  public pdf_url: string;
  public operator_id: string;
  public department_id: string;
  public member_id: string;
  public member_name: string;
  public partner_id: string;
  public partner_name: string;
  public office_id: string;
  public office_name: string;
  public office_detail: string;
  public title: string;
  public memo: string;
  public payment_condition: string;
  public billing_date: string;
  public due_date: string;
  public sales_date: string;
  public billing_number: string;
  public note: string;
  public document_name: string;
  public payment_status: string;
  public email_status: string;
  public posting_status: string;
  public created_at: string;
  public updated_at: string;
  public is_downloaded: boolean;
  public is_locked: boolean;
  public deduct_price: string;
  public tag_names: string[];
  public items: BillingItem[];
  public excise_price: string;
  public excise_price_of_untaxable: string;
  public excise_price_of_non_taxable: string;
  public excise_price_of_tax_exemption: string;
  public excise_price_of_five_percent: string;
  public excise_price_of_eight_percent: string;
  public excise_price_of_eight_percent_as_reduced_tax_rate: string;
  public excise_price_of_ten_percent: string;
  public subtotal_price: string;
  public subtotal_of_untaxable_excise: string;
  public subtotal_of_non_taxable_excise: string;
  public subtotal_of_tax_exemption_excise: string;
  public subtotal_of_five_percent_excise: string;
  public subtotal_of_eight_percent_excise: string;
  public subtotal_of_eight_percent_as_reduced_tax_rate_excise: string;
  public subtotal_of_ten_percent_excise: string;
  public subtotal_with_tax_of_untaxable_excise: string;
  public subtotal_with_tax_of_non_taxable_excise: string;
  public subtotal_with_tax_of_tax_exemption_excise: string;
  public subtotal_with_tax_of_five_percent_excise: string;
  public subtotal_with_tax_of_eight_percent_excise: string;
  public subtotal_with_tax_of_eight_percent_as_reduced_tax_rate_excise: string;
  public subtotal_with_tax_of_ten_percent_excise: string;
  public total_price: string;
  public registration_code: string;
  public use_invoice_template: boolean;
}

/**
 * Get Billings
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/operations/get-billings
 *
 */
declare class BillingsResponse {
  public data: BillingData[];
  public pagination: PaginationData;
}

/**
 * Quote
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/Quote
 */
declare class Quote {
  public id: string;
  public pdf_url: string;
  public operator_id: string;
  public department_id: string;
  public member_id: string;
  public member_name: string;
  public partner_id: string;
  public partner_name: string;
  public partner_detail: string;
  public office_id: string;
  public office_name: string;
  public office_detail: string;
  public title: string;
  public memo: string;
  public quote_date: string;
  public quote_number: string;
  public note: string;
  public expired_date: string;
  public document_name: string;
  public order_status: string;
  public transmit_status: string;
  public posting_status: string;
  public created_at: string;
  public updated_at: string;
  public is_downloaded: boolean;
  public is_locked: boolean;
  public deduct_price: string;
  public tag_names: string[];
  public items: QuoteItem[];
  public excise_price: string;
  public excise_price_of_untaxable: string;
  public excise_price_of_non_taxable: string;
  public excise_price_of_tax_exemption: string;
  public excise_price_of_five_percent: string;
  public excise_price_of_eight_percent: string;
  public excise_price_of_eight_percent_as_reduced_tax_rate: string;
  public excise_price_of_ten_percent: string;
  public subtotal_price: string;
  public subtotal_of_untaxable_excise: string;
  public subtotal_of_non_taxable_excise: string;
  public subtotal_of_tax_exemption_excise: string;
  public subtotal_of_five_percent_excise: string;
  public subtotal_of_eight_percent_excise: string;
  public subtotal_of_eight_percent_as_reduced_tax_rate_excise: string;
  public subtotal_of_ten_percent_excise: string;
  public total_price: string;
}

/**
 * Get Quotes
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/operations/get-quotes
 */

declare class QuotesResponse {
  public data: Quote[];
  public pagination: PaginationData;
}

/**
 * Department
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/Department
 */
declare class Department {
  public id: string;
  public zip: string;
  public tel: string;
  public prefecture: string;
  public address1: string;
  public address2: string;
  public person_name: string;
  public person_title: string;
  public person_dept: string;
  public email: string;
  public cc_emails: string;
  public office_member_id: string;
  public office_member_name: string;
  public created_at: string;
  public updated_at: string;
}

/**
 * Partner
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/Partner
 */
declare class Partner {
  public id: string;
  public code: string;
  public name: string;
  public name_kana: string;
  public name_suffix: string;
  public memo: string;
  public created_at: string;
  public updated_at: string;
  public departments: Department[];
}

/**
 * Item
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/Item
 */
declare class Item {
  public id: string;
  public name: string;
  public code: string;
  public detail: string;
  public unit: string;
  public price: string;
  public quantity: string;
  public is_deduct_withholding_tax: boolean;
  public excise: string;
  public created_at: string;
  public updated_at: string;
}

/**
 * Office
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/Office
 */
declare class Office {
  public id: string;
  public name: string;
  public zip: string;
  public prefecture: string;
  public address1: string;
  public address2: string;
  public tel: string;
  public fax: string;
  public office_type: string;
  public office_code: string;
  public registration_code: string;
  public created_at: string;
  public updated_at: string;
}

/**
 * Department
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/Department
 */
declare class department {
  public id: string;
  public zip: string;
  public tel: string;
  public prefecture: string;
  public address1: string;
  public address2: string;
  public person_name: string;
  public person_title: string;
  public person_dept: string;
  public email: string;
  public cc_emails: string;
  public office_member_id: string;
  public office_member_name: string;
  public created_at: string;
  public updated_at: string;
}
/**
 * Partner
 * https://invoice.moneyforward.com/docs/api/v3/index.html#/schemas/Partner
 */
declare class Partner {
  public id: string;
  public code: string;
  public name: string;
  public name_kana: string;
  public name_suffix: string;
  public memo: string;
  public created_at: string;
  public updated_at: string;
  public departments: Department[];
}

declare class PartnersResponse {
  public data: Partner[];
  public pagination: PaginationData;
}

declare class ItemsResponse {
  public data: Item[];
  public pagination: PaginationData;
}

declare namespace MfInvoiceClient {
  /**
   * MF請求書APIクライアントを生成します。
   * @returns {MfInvoiceClient}
   */
  export declare function create(
    clientId: string,
    clientSecret: string
  ): MfInvoiceClient;
  /**
   * 日付操作用のユーティリティクラスを生成します。
   * @param baseDate 基準日
   * @returns {DateUtil} 日付操作用のユーティリティクラス
   */
  export declare function getDateUtil(baseDate: Date): DateUtil;
  /**
   * mfからログアウトします。
   */
  export declare function logout(clientId: string, clientSecret: string): void;
  /**
   * MF認証のコールバック関数です。
   * @param request
   */
  export declare function mfCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: any,
    clientId: string,
    clientSecret: string
  ): GoogleAppsScript.HTML.HtmlOutput;
  /**
   * MF請求書API認証ダイアログを表示します。
   */
  export declare function showMfApiAuthDialog(
    clientId: string,
    clientSecret: string
  ): void;
  /**
   * 認証URLを取得します。
   */
  export declare function createMfAuthUrl(
    clientId: string,
    clientSecret: string
  ): string;
  /**
   * リダイレクトURIを取得します。
   * @returns {string} リダイレクトURI
   */
  export declare function getRedirectUri(): string;

  /**
   * マネーフォワード請求API用クライアント
   * ■ Money Forward Invoice API
   * https://invoice.moneyforward.com/docs/api/v3/index.html#/
   */
  export declare class MfInvoiceClient {
    billings: BillingService;
    quotes: QuoteService;
    partners: PartnerService;
    items: ItemService;
    office: OfficeService;
    /**
     * コンストラクタ
     */
    constructor(accessToken: string);
  }
}

export declare class MfOAuth2 {
  private clientId;
  private clientSecret;
  constructor(clientId: string, clientSecret: string);
  static create(clientId: string, clientSecret: string): MfOAuth2;
  getMfService(): OAuth2Service;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCallback(request: any): GoogleAppsScript.HTML.HtmlOutput;
  logout(): void;
  getAuthorizationUrl(): string;
}

export declare class TextLinkUtil {
  /**
   * MF請求書URLを生成します。
   * @param {string} billingNumber 請求書番号
   */
  static createMfBillingUrl(billingNumber: String): string;
  /**
   * 取引先URLを生成します。
   */
  static createPartnerUrl(partnerId: String): string;
}
