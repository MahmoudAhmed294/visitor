import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { URL } from "api/URL";
import { Company } from "api/apiType";
import axios from "axios";

export interface LanguageState {
  status: "idle" | "loading" | "failed";
  companies: [];
  pageNumber: number;
  company: Company | undefined;
}

const initialState: LanguageState = {
  status: "failed",
  companies: [],
  pageNumber:1,
  company:undefined
};
export const getSearchResult = createAsyncThunk(
  "search/Api",
  async ({
    companyName,
    groupName,
    floorNo,
    buildNo,
    pageNumber
  }: {
    companyName: string;
    groupName: string;
    floorNo: string;
    buildNo: string;
    pageNumber:number
  }) => {
    const response = await axios.get(
      URL +
        `?_page=${pageNumber}&q=${companyName !== "" ? companyName : ""}${
          groupName !== "" ? "&group=" + groupName : ""
        }${floorNo !== "" ? "&floorNo=" + floorNo : ""}${
          buildNo !== "" ? "&buildNo=" + buildNo : ""
        }`
    );


    return response.data;
  }
);

export const SearchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    NextPage:(state:any)=>{
      state.pageNumber += 1
    },
    PrevPage:(state:any)=>{
      if(state.pageNumber > 1){
        state.pageNumber -= 1
      }
    },
    getCompany:(state:any , action: PayloadAction<number>)=>{
     state.company = state.companies.filter(({id} , index)=> id === action.payload)[0]
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResult.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getSearchResult.fulfilled, (state, action) => {
        state.status = "idle";
        state.companies = action.payload;
      })
      .addCase(getSearchResult.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {NextPage ,PrevPage ,getCompany} = SearchSlice.actions;

export const getCompanies = (state: RootState) => state.search.companies;
export const getStatus = (state: RootState) => state.search.status;
export const getPageNumber = (state: RootState) => state.search.pageNumber;
export const getCompanyInfo = (state: RootState) => state.search.company;

export default SearchSlice.reducer;
