import { Image as AntdImage, ImageProps as AntdImageProps } from 'antd'

export interface ImageProps extends AntdImageProps {}

const Image: React.FC<ImageProps> = (props) => {
  return <AntdImage preview={false} style={{ width: '4rem' }} {...props} />
}

export default Image
