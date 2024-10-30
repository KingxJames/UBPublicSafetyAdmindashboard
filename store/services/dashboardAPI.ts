import { baseAPI } from "./baseAPI";
import { DashboardInitialState, setDashboardState } from "../features/dashboardSlice";

export const dashboardAPI = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
      fetchDashboard: builder.query({
        query: () => ({
          url: "/user", //will change this in the future
          method: "GET",
        }),
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
  
            if (data?.data?.reportData._id) {
              dispatch(setDashboardState(data?.data?.reportData));
            }
          } catch (e) {
            console.error(e);
          }
        },
      }),
      updateDashboard: builder.mutation({
        query: (body: Partial<DashboardInitialState>) => ({
          url: "/users", //this will change
          method: "PUT",
          body,
        }),
      }),
    }),
  });
  
  export const { useFetchDashboardQuery, useUpdateDashboardMutation } =
    dashboardAPI;
   