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
  alt: string
  src: string
  blurDataURL: string
  description: string
}

const Item: React.FC<IItemProps> = ({
  className,
  alt,
  src,
  description,
  blurDataURL,
}) => {
  const { setIsOpen, setActiveItem } = useModal()

  const openModal = (data: React.SetStateAction<React.ReactNode>) => {
    setIsOpen(true)
    setActiveItem(data)
  }

  return (
    <PlaygroundItem
      className={className}
      description={description}
      image={{
        src,
        alt,
        fill: true,
        blurDataURL,
        placeholder: 'blur',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
        style: {
          objectFit: 'cover',
        },
      }}
      onClick={() =>
        openModal(
          <Image
            alt={alt}
            blurDataURL={blurDataURL}
            className="image-relative"
            fill
            placeholder="blur"
            src={src}
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
      <Container className="relative z-10 px-4 lg:px-12">
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
            <BentoGrid className="mb-12 sm:mb-0">
              <Item
                alt="A 2D stone monster with glowing eyes"
                blurDataURL="data:image/webp;base64,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"
                className="row-span-4 h-full"
                description="Stone monster I made for a game back at MediaCollege"
                src="/images/playground/stonithe.webp"
              />
              <Item
                alt="A soccer image with two people going after the ball on a small block of grass"
                blurDataURL="data:image/webp;base64,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"
                className="row-span-3 h-full"
                description="Soccer image I made with Cinema4D and PhotoShop"
                src="/images/playground/soccer.webp"
              />
              <Item
                alt="Book cover with three people, one knight, one archer, and one wizard in front of a snowy dark background"
                blurDataURL="data:image/webp;base64,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"
                className="row-span-4 h-full"
                description="My own take on a new cover for my favorite child-book 'Meester van de Schaduw'"
                src="/images/playground/bookcover.webp"
              />
              <Item
                alt="Soccer image where the photo has been made out of brush strokes to create a painting like effect"
                blurDataURL="data:image/webp;base64,UklGRowEAABXRUJQVlA4WAoAAAAgAAAAgQAAXgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggngIAABAbAJ0BKoIAXwA+GQqEQaEE9sVXBABhLSAYBBAa+ZXF8buL0fc3HfAy20MN4TyI4KAG9X3vFdx8kfEFK+j2RynHxAjSCr1ptNwOX7HPWt+8B2daYm9GJWmqWyu2DNKBMdNu7sQ1epB4dUe48goNP6N11Pr4Avb8Zhnyb6FG9t827HHLy1MS5ZH+MORmpr/zr/ekXTeTmQJkDY/c6aBbrdDOFwQf6sO5KrVi27PLMWJUvY+bWDUYkz1azQrdPbtvYPvgQV3+Q8/vAXErH/y9Nc+HEsDawfDDA8o+FFDA2BYDAAD+/xspv/5+Z/x7/6TvQ2cd4eRgy8wkbVKixp3u3KZXWfjIxehdnoIscxj885oBP5fQMHbCA3Zl1h/EL/OXCDkcNrGoRYHG0AHAKfxEAFyYFYMRT3mprDA0ntSEUPui/T9ijp+jzdqmnY17HQBylqEtFlxiqmhXH/EJi1scxTWViLbLg3WItTDW1pDOYYl8c8V5eXB+XsU+vNvYVKAqpyC1sP0GLUv5OYbGNTbWxU8RlXxMaM5xn1temh4QJkc4qOWYYcJMe3k/i39qk+d+BfG5nCvo+JIDremuAtJ69S8nq5ulQMz0KMGimIiNJwK4c2D7Gteh66fH8S/yPVfUWcKqIi5WvKwzvhzn4RKdRQpCDdCXK7VBmCzmz5DYNpsfiMV/MsQXEr+3Y/1dV8n6KIGJwFqcEr1Z/6G4EJsTw6yctBDxYytWmmq9kpYG5euVVt/hGZ9MHeljekN4KvM9waz7c9naWwMNt73lO8Xqgof41bDJQxnpJ6/PnPoChGcZ7g11uvwHoHBK39wsAP41pvC/XksRWD/fi3b+uUtMtFBr2f9LbVDNcnDJETQbgLjuStZIrwWgACE1FAAAAAA="
                className="row-span-3 h-full"
                description="I found some cool looking PhotoShop brush presets online and wanted to try them out."
                src="/images/playground/brush.webp"
              />
              <Item
                alt="Photo of a man walking down a road at night"
                blurDataURL="data:image/webp;base64,UklGRo4EAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggoAIAAJAXAJ0BKoIAggA+GQyEQiEEDAQAYS0oiCPwDbeX2rZeT18YX/upMbnjLADrBohZR2vUIzuJTaceuSP4fpDQSbM5hWMHHYvcVg3roQG+7p7wWB3SsOK6Z/rZwMuwIjt62pjarh5mi7Vr66qhbvdFqwmY7/4aWQy84A3+fNmnoaArrkEx83B1zZrB8fFdUgZMNXCdCfJcVuXEyM8j7gkIAYsXhL9ob6Q7OH6c+9FIer1iMA6XpE3h4+w7I4c2WIYmUDi/9JwYAP7+kJ5mlvEOjfgjSiQmbPS/aBVRd/iie6iGI9Oq8lS/WjMrJms+u4e2wWF4KneGRQCLc/vyMmwf3raex5psd1Mg0a4TtXG192XjimwB3Re/6J2n34l3PnvDFy2w1crwZvk1bVm8WNLdemfdmbUJEzqyY0V3XGdCKDEo+p6+reru/KWx4DWH8+hbU4p6G+4DXroHUzGNHlv5PpAFM1Ir728rV6RFV4IED86YeCgIgGN0WpEfn2L6ukCIPo+ZIkR91VFwrScRq9B9w9hV3xK0Htzxv0zrDzczOHRLtyVeBgEEJgr0R0WzxnOZF4yOQZFNsBD4Ux4hxGO78/mOZj+SxK8hlQKdLHLDlB+4L9ogX78vAzUO9y1ezPIFlYB5VRwV47c2fNRMS2bFg7Oqsibti+yLYpm+oX1Vg+1JMOorrMkeMb0dAfgRWBELvyuLN7/n5nL/1+riJ/oNMk4kuuDl5jSZhJKtDZExa/jQit/wgD3sYix8xcqBUft3fNJpXhEnvS+54YEs499uX+88ZVeX4xdQ/yJ5E3lW3vs7KbU+hDlDE6wgkufSsqx1NEKk0RQkzDsTLEptkG/vA90znkgH7YoBP8OpYCcUW+GAfIBxCDMNpUXfmJye/jgAAA=="
                className="row-span-3 h-full"
                description="I saw a similar image on Instagram, so I tried to make my own version"
                src="/images/playground/perspective.webp"
              />
            </BentoGrid>
          </Col>
        </Grid>
      </Container>
      <Modal />
    </>
  )
}
