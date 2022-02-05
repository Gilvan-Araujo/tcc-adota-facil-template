import { imgbbApi } from '@api/index'

export default {
  uploadImage: async (file: File) => {
    if (!file) return {}

    const body = new FormData()

    body.append('image', file)
    body.append(
      'key',
      process.env.NEXT_PUBLIC_IMGBB_API_KEY
        ? process.env.NEXT_PUBLIC_IMGBB_API_KEY
        : ''
    )

    return imgbbApi.post('/upload', body)
  }
}
