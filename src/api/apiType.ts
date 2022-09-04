export interface Company {
  id: number;
  img: string;
  name: string;
  group: string;
  floorNo: string;
  buildNo: string;
  about: string;
  visiting: string;
}

// export interface SearchResults {
//   logo: string;
//   id: string;
//   name: string;
// }
// export interface SearchParams {
//   buildNo?: number;
//   floorNo?: number;
//   companyName?: string;
//   employeeName?: string;
// }

// export interface Visitor {
//   frontID: string;
//   backID: string;
//   fullName: string;
//   phone: string;
// }

// export interface companyFunctions {
//   getSearchResult: ()=> void, // should by 12 item maximum

//    getNextItems:()=> void, // should load the next 12 different items

//    getPrevItems:()=> void, // should load the previous 12 different items

//    getCompany:(id: string)=> void,

//    getVisitorTime:(visitor: Visitor)=> void,
// }

