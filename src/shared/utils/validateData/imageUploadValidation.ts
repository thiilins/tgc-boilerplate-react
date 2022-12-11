import validateFileExtension from './validateFileExtension'
import validateImageSize from './validateImageSize'

interface IImageUploaderProps {
  file: File
  acceptedExtensions: Array<string>
  formatErrorMessage: string
  maxWidth?: number
  maxHeight?: number
  imgPreview: string
  validateSize?: boolean
}

const imageUploadValidation = async ({
  file,
  acceptedExtensions,
  formatErrorMessage,
  maxWidth,
  maxHeight,
  imgPreview,
  validateSize
}: IImageUploaderProps) => {
  try {
    if (
      !validateFileExtension(file.name.toLocaleLowerCase(), acceptedExtensions)
    ) {
      return {
        success: false,
        type: 'error',
        title: 'Erro no upload de imagem.',
        description: formatErrorMessage
      }
    }

    if (validateSize && maxWidth && maxHeight) {
      await validateImageSize({
        imgUrl: imgPreview,
        maxWidth,
        maxHeight
      })
    }
  } catch (err: any) {
    return {
      success: false,
      type: 'error',
      title: 'Erro no upload de imagem.',
      description: err.message
    }
  }

  return {
    success: true,
    type: 'success',
    title: 'Upload Validado com sucesso.',
    description: ''
  }
}

export default imageUploadValidation
