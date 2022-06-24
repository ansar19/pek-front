import gql from "graphql-tag";

export const PEK_FAC_LIST = gql`
query pekFacilitiesList {
  pek_facilities {
    id
    name
    description
    control_frequency
  }
}`
