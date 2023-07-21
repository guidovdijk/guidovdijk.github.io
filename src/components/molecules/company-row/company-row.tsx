import React from 'react'

import Image, { ImageProps } from 'next/image'

export interface ICompanyRowProps {}

const companyImages: ImageProps[] = [
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
]

export const CompanyRow: React.FC<ICompanyRowProps> = () => (
  <div className="flex flex-col items-center gap-y-6 sm:flex-row">
    <div className="flex shrink-0 self-start sm:pt-1 xl:self-center">
      <p className="flex shrink-0 text-subtitle uppercase text-white-500">
        Companies who lit
        <br />
        up my passion
      </p>
      <div className="ml-5 mr-8 mt-1.5 h-[1px] w-24 bg-white-500" />
    </div>
    <div className="flex flex-wrap items-center gap-x-16 gap-y-8">
      {companyImages.map((img, index) => (
        <Image
          {...img}
          key={`company-row-${index}`}
          style={{ objectFit: 'contain' }}
        />
      ))}
    </div>
  </div>
)
