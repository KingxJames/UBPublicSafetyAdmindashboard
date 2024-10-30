import { createSlice, isAction, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Adjust the path according to your project structure

interface ITotal {
  totalReports: number;
  totalMessagesSent: number;
  totalUsers: number;
}

export interface DashboardInitialState {
  total: ITotal;
}

const initialState: DashboardInitialState = {
  total: {
    totalReports: 0,
    totalMessagesSent: 0,
    totalUsers: 0,
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardState: (
      state,
      action: PayloadAction<DashboardInitialState>
    ) => {
      return { ...state, ...action.payload };
    },

    setTotalState: (state, action: PayloadAction<ITotal>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setDashboardState, setTotalState } = dashboardSlice.actions;

export const selectDashboard = (state: RootState) => {
    return state.dashboard
}

export default dashboardSlice.reducer