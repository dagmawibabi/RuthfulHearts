
import {createClient} from '@sanity/client'

const apiVersion =process.env.REACT_APP_SANITY_API_VERSION
const dataset =process.env.REACT_APP_SANITY_DATASET
const projectId =process.env.REACT_APP_SANITY_PROJECT_ID

const readToken="skVWKrqone1qCf9MPBPYda3svvotAYg9c38H8cbvBasg4bYUoctjnaGOu3Xz6dKBQtfl7ndf5e9gX0iuWjd5QFYsAOuPCCqGQ0PLAwe8FSbvre6slsNe68SVCnIwp41XxCZG9cBaccccyjhbDAS5pejYvCN4fqEx5YYkJgp7CaeGSPgGCdnC"
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token:readToken,
  useCdn:false

})
