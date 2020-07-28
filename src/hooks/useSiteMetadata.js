import {graphql as gql, useStaticQuery} from 'gatsby'

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        gql`
        query SITE_METADATA_QUERY {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
        `
    )
    return site.siteMetadata
}
