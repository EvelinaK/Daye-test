import get from "lodash/get";

const getFilteredList = (searchValue, dataArr, searchFieldsArr) =>
  searchValue
    ? dataArr.filter((item) => {
        return searchFieldsArr.some((searchField) => {
          const val = get(item, searchField, null);
          if (val && (typeof val === "number" || typeof val === "string")) {
            return `${val}`.toLowerCase().includes(searchValue);
          }
          if (process.env.NODE_ENV !== "production") return false;
        });
      })
    : dataArr;

export default getFilteredList;
