export interface IStartup {
  Company: string
  "Valuation ($B)": string
  "Date Joined": Date
  Country: string
  City: string
  Industry: string
  Investors: string
}

export interface IStartupListResponse {
  data: Array<IStartup> | []
  message: string
}