'use client'

import React from 'react'

import Image from 'next/image'

import { Col, Container, Grid } from '@/components/atoms/grid'
import { Modal, useModal } from '@/components/molecules/modal'
import { PlaygroundItem } from '@/components/molecules/playground-item'
import { BentoGrid } from '@/components/organisms/bento-grid'

// TODO: Remove placeholders
interface IItemProps {
  className: string
}
const Item: React.FC<IItemProps> = ({ className }) => {
  const { setIsOpen, setActiveItem } = useModal()

  const openModal = (data: React.SetStateAction<React.ReactNode>) => {
    setIsOpen(true)
    setActiveItem(data)
  }

  return (
    <PlaygroundItem
      className={className}
      description="Lorem ipsum dolor sit amet, consec tetur adipiscing elit."
      image={{
        src: '/images/playground/stad-als-spel-stonithe.webp',
        alt: 'A brown rock monster with glowing eyes',
        fill: true,
        style: {
          objectFit: 'cover',
        },
      }}
      onClick={() =>
        openModal(
          <Image
            alt="A brown rock monster with glowing eyes"
            className="image-relative"
            fill
            src="/images/playground/stad-als-spel-stonithe.webp"
            style={{
              objectFit: 'contain',
            }}
          />,
        )
      }
    />
  )
}

export default function PlayGround() {
  return (
    <>
      <Container className="px-4 lg:px-12">
        <Grid>
          <Col span={12}>
            <div className="mb-12 mt-40 flex flex-col gap-y-4">
              <h2 className="text-heading-xl font-semibold">The Playground</h2>
              <p className="text-body">
                For all my illustrations, websites, and programs
                <br />
                which I still want to showcase and deserves some spotlight.
              </p>
            </div>
          </Col>
          <Col className="col-span-12 col-start-1 md:col-span-10 md:col-start-2">
            <BentoGrid className="mb-64">
              {[4, 3, 4, 3, 4, 3, 3, 2].map((height, index) => (
                <Item key={index} className={`h-full row-span-${height}`} />
              ))}
            </BentoGrid>
          </Col>
        </Grid>
      </Container>
      <Modal />
    </>
  )
}
