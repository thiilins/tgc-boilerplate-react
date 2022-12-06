interface IValidateImageSizeProps {
  imgUrl: string
  maxWidth: number
  maxHeight: number
}

export default async ({
  imgUrl,
  maxWidth,
  maxHeight
}: IValidateImageSizeProps) => {
  const img = document.createElement('img')

  const promise = new Promise((resolve, reject) => {
    img.onload = () => {
      const width = img.naturalWidth
      const height = img.naturalHeight

      if (width > maxWidth || height > maxHeight) {
        reject('Os pixels dessa imagem excedem limite máximo de upload.')
        // throw new Error("Os pixels dessa imagem excedem limite máximo de upload.");
      }

      resolve({ width, height })
    }

    img.onerror = reject
  })

  img.src = imgUrl

  return await promise
}
