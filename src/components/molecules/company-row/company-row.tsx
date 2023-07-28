import React from 'react'

import Image, { ImageProps } from 'next/image'

export interface ICompanyRowProps {}

const companyImages: ImageProps[][] = [
  [
    {
      src: 'images/companies/nike.svg',
      alt: '',
      width: 80,
      height: 41,
    },
    {
      src: 'images/companies/tommy_hilfiger.svg',
      alt: '',
      width: 70,
      height: 50,
    },
  ],
  [
    {
      src: 'images/companies/postcode_loterij.svg',
      alt: '',
      width: 75,
      height: 50,
    },
    {
      src: 'images/companies/leenbakker.svg',
      alt: '',
      width: 95,
      height: 50,
    },
  ],
  [
    {
      src: 'images/companies/fc_utrecht.svg',
      alt: 'Logo of FC Utrecht, a Dutch soccer-club',
      width: 50,
      height: 54,
    },
    {
      src: 'images/companies/intertoys.svg',
      alt: '',
      width: 101,
      height: 24,
    },
  ],
]

const ImageWrapper: React.FC<{ images: ImageProps[]; key: any }> = ({
  images,
  key,
  ...props
}) => (
  <div
    {...props}
    key={key}
    className="flex w-full items-center sm:w-auto sm:gap-x-16"
  >
    {images.map((img: ImageProps, index: number) => (
      <div className="flex h-full w-2/4 flex-grow">
        <Image
          {...img}
          key={`image-wrapper-${index}`}
          className="ml-0 sm:ml-auto sm:mr-auto"
          style={{ objectFit: 'contain' }}
        />
      </div>
    ))}
  </div>
)

const CompanyRow: React.FC<ICompanyRowProps> = () => (
  <div className="flex flex-col gap-y-6 sm:flex-row sm:items-center">
    <div className="flex shrink-0 self-start sm:pt-1 xl:self-center">
      <p className="flex shrink-0 text-subtitle uppercase text-white-500">
        Companies who lit
        <br />
        up my passion
      </p>
      <div className="ml-5 mr-8 mt-1.5 h-[1px] w-24 bg-white-500" />
    </div>
    <div className="flex flex-wrap items-center gap-y-8 sm:gap-x-16">
      {companyImages.map((images, index) => (
        <ImageWrapper key={`company-row-${index}`} images={images} />
      ))}
    </div>
  </div>
)

export default React.memo(CompanyRow)
