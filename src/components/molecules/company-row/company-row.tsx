import Image, { ImageProps } from 'next/image'
import React from 'react'

export interface ICompanyRowProps {
}

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
  <div className="flex sm:flex-row flex-col gap-y-6 items-center">
    <div className="shrink-0 flex xl:self-center self-start sm:pt-1">
      <p className="shrink-0 flex text-subtitle uppercase text-white-500">
        Companies who lit<br />up my passion
      </p>
      <div className="w-24 h-[1px] bg-white-500 mt-1.5 ml-5 mr-8" />
    </div>
    <div className="flex flex-wrap items-center gap-x-16 gap-y-8">
      {
        companyImages.map((img) => (
          <Image
            {...img}
            style={{ objectFit: 'contain' }}
          />
        ))
      }
    </div>
  </div>
)
