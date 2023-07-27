import * as React from 'react'

import Image from 'next/image'

import { Button } from '@/components/atoms/button'
import { Col, Grid } from '@/components/atoms/grid'

const AboutMeSvg: React.FC = () => (
  <svg fill="none" viewBox="0 0 81 78" xmlns="http://www.w3.org/2000/svg">
    <path d="M81 1H1V78" stroke="url(#paint0_linear_402_909)" />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_402_909"
        x1="41"
        x2="41"
        y1="1"
        y2="78"
      >
        <stop stopColor="#DD117E" />
        <stop offset="0.489583" stopColor="#C079FE" />
        <stop offset="1" stopColor="#9FD9FF" />
      </linearGradient>
    </defs>
  </svg>
)

interface IAboutMeProps extends React.HTMLAttributes<HTMLElement> {}

const AboutMe: React.FC<IAboutMeProps> = ({ className, ...props }) => (
  <Grid {...props} as="section" className={`flex items-center ${className}`}>
    <Col className="order-1 col-span-12 lg:-order-1 lg:col-span-6 lg:col-start-2">
      <span className="mb-2 text-subtitle uppercase text-white-500">
        about me
      </span>
      <h2 className="mb-4 text-heading-s">Hello! My name is Guido van Dijk.</h2>
      <div className="flex flex-col gap-y-8">
        <p>
          I am a <b>Dutch</b> Front-end developer with five years of work
          experience in <b>UI/UX design</b> and <b>web development</b>. I
          specialize in Vue.js and JavaScript ES-Next, which I use to create
          optimized, accessible websites and applications, in a short amount of
          time.
        </p>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <Button
            className="w-full sm:w-auto"
            href="/Guido_van_Dijk_Resume.pdf"
            target="_blank"
            variation="primary"
          >
            My resume
          </Button>
          <Button
            href="https://github.com/guidovdijk"
            target="_blank"
            variation="secondary"
          >
            My GitHub profile
          </Button>
        </div>
      </div>
    </Col>
    <Col className="gradient-shadow relative col-span-12 sm:col-span-10 md:col-span-8 lg:col-span-4">
      <Image
        alt="Image of Guido van Dijk, the developer of this portfolio"
        blurDataURL="data:image/webp;base64,UklGRmYQAABXRUJQVlA4WAoAAAAgAAAAiQIAXQMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggeA4AANDFAJ0BKooCXgM+MRiJQqIhoRAHZCADBLS3fj4943LgQBRp/+SO9hwf/FH/58dvv90v+iUhmcDbknzJ//+RoHAP//65vgH//6s/f83wAY7U1Kq/fJpPTEAM/JFpzgLbla7Z9h3Nm+AHCLlNSqwFzXQF/D71MjqtIE+NOxMlf9h3NN29ympVYC5rtn2DSaPSLFDKGEl/TOKtsoespjnsO5wgLKqd++vFlfKSDIhqYiFWRs+w7nCLlNSpAldXNds+wrJRJBSkmQikdQqZhpVEQTxx7eZGW8fvH4dcYgGcBM4YJ1EUkb9MRERfeNvAhFd4/DsvaguCZNFwSzrWsjn68sLfx+RXprAXNds+nuJ6aAg6hswDNcV2oZVELoHoyiThiZncOstpp1ltY+MQ3cjdAphyqAn/r+vAoCRSK7x+8iBFyiFiZnKXYiXmnb5Wd/doTg2vjtWjrDiLw2Fuiu8fvGyJnnNXUf2osO7jMaB1JQvllBmJmeLay0RbWXDdHBh8QRZN/NMkRYLcMi+fyN0GYldis8PHLay2CtphdTEWgphw6yl8O8mJ4toJ5/7f1kJc1KrAXNfbyB6dIcGSuItvkgcmJNMcpwVL5bBW1ltY7ytpp8sy13WRPBUEGlV8L7C+8fjgGtFgtw14gg0qtNxb4+qLc+W1lsFS3a/VXYX3j9yMtHDRwy/+feP3jbC+8ft1N9TN4B6jSSZYNm/NXIND8frwnj9hW9timZynWW1ltZbBWPRXCpvH7kK1B7gE1gLmu2fYdzhFyiFiZni2stnxtteVwxgUum5Qs8UvjxzifXxBlYyYI/xKfp6w0GYmZ4tdtsP1Cu61pxsFuiuTnyhni2mnWPFnvltZbWWwVHA0+V5mjhgJmEP4aKSUX8bbpJW1YdZbWWIZF0bwTqVU5ZPW6HCchJUOstBTDKIRVYf4mJYtrKXsOstrHkISFDd+RxbdyJHNjiW3TmqOUNaVlpzemq7ryvPTbnH2giiBpsEAWkSmFepquYkk6uYCY/d/80QSFGvH/fuQP7b/c+nGkpFXga+GYyRP7DuJ43TUBCLnmCc2eN2DYW8g0HujiWDb0rPqQTY7PsO5wi5TUqqNQuwmRcWcNH+Jks9WhGRgihEk0ET+w7nCLlNMk++QngcgwpwW5r7xLn2WaN2jPsO5wi5TUqqxfHMDe62PaszSlVeQ/JjniDghmH+w7nBzLLpVRrrV56EBExHgIdwd6WH6T9VmqAB3j4KsBcgDjT+OB5T3mWQmL4ecH28qDoq2Wt1dMkgJ0k5DucICPAnAUMOvOQ80IfP0KVjBVuvMhVL8Iv4WWO0rZPVFcdfBUbBcYFroCY0AJZ+FOUcD7Uvdw6M1uH5xEIr8z6E2EX/rEBMXxpCzscYxBkBtZUDoZCJi8FiiABVOrQ/lEYf74dKPB7/aCeRFS1nGN87ZZKvSlnc4zRFFF62YeZ86xIcMegjxLpLSzsnriRP7BsTlHq3uEGMYDpj2ZFs4fXd0CWrIRJAGsIrqGmgIcRwltWJlhiLPqFyk2F4OCYNLsDMTAXNdZ+H3dGJADc+MT66AGLsfy9s6OlGEe5KT8ZOMqnbsXL58QolOn/cN2qhRED2Pb9Wt97hmYACpaESaW6/PskvgPmGyyvO3VzNYLdE5FdeEwrG/9MkkRZxGGpdeyePtGRKveszxWye7GDBw97cygu+NgwJnKXYqIZ4eLTntmgXqwJqB7FqRrfpjIQoC/mTpzeJorNL4/dZEV3jbqmQgicAuQDBTfDXdjBk5tBYIwOQEcC/FoQHjnBJ4nlLueQ7ESJmdOu9xJcwXJ+suZX+FpJ1joDoFoi0Q8b+QTUwAiFREPsfJ05rEY3+Og5Rwde8ctfJLml1xFycFLFx6NSyf8hgbXk/2BkthydJQi4ZZD/znLcKGry/xue+q/Oi3tJS2yb+brJquxwuzzhv3bngTqjFWl8KszwTWR2cHsesMBfTsg2oL2yIF17AR1jjLNa94NHcYMPBtl+ERev1H4QUORV3VIb7cCyb7JmpHK93MCCnaD8z+m3g14wDN7k4vIqP6f2FlFV52HkPNCH8o3vC5QQyySCVV/9WycNQArlbJTzEvOt6Hz/KYSdZ0aiwpNbGVwaAA90xDNwTDytNWCX88haJtdTv3/WTHp0MKdAdirL0ve+H8jQEA+BgkMjUQIWgIYcsjxyaLo3bEpmtIVk81mrJL1cqpqD3tfb+yux1u2rGYd5FILQGlOmVXpAlRGFJjeQEAFvSl5/4LBQkeIFOv+Ob0F6Pl+amFrnVViKvT0vKc1pKIDVey59kLspInGtNv5FDG4XoNAeW+IHW8LkOKuGnuQF8cjPacl8uvy4hy2gYRlL5Seqa61/XlKxjgIUYbl0FjViMg5K/CeAfQgi5Be1wLwF22YNXmAAAPwmH+j9PJsvFn4n23I2FpplUCA6etfarRXGHCrBi4PuVMjQ0kDps5NW7a1RYHMSW04bsn4FJ7VPNJ1s/xiUPTgiem2xIpqee5abDq6tr56DtIt7rZDZEHkVb2F/WRyzuw++4RVvwboQCmTZtIiC54Reh+PA4AJlwxNf7DiAnhACyu/lk2rT1ZHRWh/XexHnqEwlxsLMF6ciRVK+TGXkB89YZkIL9NSoS4XVh9oLwF3gHBvj7HpUhL9zjFzv5JbH1t5A5vUYSqRb/+4Q6iMIk4vUQ1WtKdpVFYt6Z1wA2u9ryc3JWV89599sUq4YZd7546gFi5hnXKOpI8yqp2QadH3J12N0itUfZLf5n23QKrEibhQ5Tvxi/i2NxhK42jv+qvognNO3uAbMy0kQRIPMIx5ePKxoXzvXyo7GqOZyCWwVhI3U97cbIW5VX8WxAhtOXlme/EjbvlSjWvtuQl8aqp83x4Qmkp+O94HHdQ6rEtnew7dJsXBM5wj9ZDtp6PutQ55VyQtOJYsZReQsPlMaobmcSwjUll94N5tojT99GCYmAPqj1pHR6BhFM0g++e441CW3ccNMMZoI5tF0ksIPCe1nCP1nrbUuTBFINLGpdFWihYAGMjgIgcJuJzNbZ+BBCkyMosxZoKOhNFqmLoND+iBN31Bk2qBtVi1LWTilb4lC5Mq0C01NP6HhZZ91T/QybjcBq/9Hmkd6uIpEfr04ZfBtB/d2CON31ZHikoscgTAAtP0q/cOieyL1o5ArJ4vWpGEmJQ4gzY5A2zgiUo1hYYvvH4TLkuWamQHMJSSlR3y8yTxDcbYiRX5E71p4u6zgOwhADyVa2asP4LfHANCzbygAASf070l3H4PqhDa2OOgdghaa5MqFK7rd4kHcmjj32p8AXlHK3jXNnHQ2hlonNIja8rrmKcUQT8h6xtJ5OJKMybjfBnfPPm0AjYuCOgYiqAZQ59koa41mi+LGm782LTTegAvlSMNKj5oX1gjCPQHRUtO9N0ZDjLeTfVlgcGTXvIEOT5q5/17097QiPnd0y+OJC/nP5POS8uL3bLjvF9XkiN4jGIIXu9QgJoV8wsALt8Znqjhf4Fs1pNAI5WOUmUDdflTjCnXvxKOmGu2gUvbftIZnsFqNb42oK4EW+xhoMAS1PrHRC8FTbgf/iYJluCW+xYXCmwgG54vcP+8Wd+qldRs2k6ok0YE7j3aNYghb95DkfzAAMe9Y9QdPT/mh1luzHvidFW2KW3LthGrZ4t1kqVtuW8woTK9vba6RpTJwBt8IA1TqFeGc6bSeznq5fbaPXEjvN3JRv/wMSXOKPSB1rbtSwx8guPdzQdUrinvd0nJUvyABCaQlYFvYCJBdWMclefcK9OZRyuFFkFwSHOWR4BdTE2txOa9+8Ai4AAtHwSC+NI4CoSqJgPTptRPPhSHJCmtEvjChJ8n0kXm53lghcYNnH+zOqPdWX1bGX1HYzio+fUPjGnQFtodKyrw8ttEUUD0ceuGYnsKTggbWbnZFg+LkLlV7TDyNVokGeJBYMrUAjoT6N5gyIN+oIlh7/83I+fLq33qjoUzRPbTlJ9oXcjhE1NEXeJT0PuwpBwAh8s5xXHR8AhwfAtdvuGoY1Z9gonzmEEYYb/Pvvh4MeoDd7q9fXbst3J/2Msy50T2wSr7LyUeiwj3VETkNfiXEDD01tUOpXhB2S4pMHkw3A1xV6zlGED3iODM+l8sv8eC6FoaoWNaW6jiSMFoZBosp8nSlZ2clFAR7ZLcn6J4d+6tSGvWqjOVl6kNgGvz9sw27C7YzLoFSGidXU8ZOe4Ey5pxmDVywKf258rojCpurMgVN52EuPVOokEP1SeUzoD8SBLLIUrNzyVyRV35vgrFfLDjs98Tpg8ufiSKqC4AkTMFgDsaKLRj3AFzHiQ9NxI53i1AMujHDhDmqC2XdNGvsBMEqAgAssu/E+M2xayj6iUQ0ZFDwauwgXgJcLswtwCySay0V1JFzASot3a/Mbfi1DL7MySOUp1+SRIyZY8cynsZ0VKWXTt52FdESJ4qPs38FmCftgOATFyErOBonzy/ribeXAM3e/yHvE/zDFhJcpKxLdGF1LFDXJham8xz2uzxNXcpBPk0Zu4n/D2aQXI0HnMVMmlEcYax9WbyrtGpjcV1/HNdlZfn80u0iBpRoc/tsv/P6j3a+gesf/HMACKHHibSn8ajKb0FxtjT3RyU4CVEy6TFVgTxcvXC8P7+sEZo3RbH65GQyir+AvgpTt4PGG92DSkQ77mnWduKySR7mUYyke3YIFE8l3+Xwye862lndg90yP71m80T9PEmXXPgh2nPWnDJ0sKeyNsdP6M+fyon3CsxAjZ+Fia2yFe9ZUEMP/VrJIG10ikY+DE020U4y8vUngBJVR2Yyr3PPrvaQfoclDIpuS4aeEyFKldV2cth+gdoL1ThTIZGzD9tqBvZbyAQSwPCIy3Cde7nQo7aoucR1TCOUvHEjkccHehb4J+FNDppDGK3Cp6hOMGifvY24iv3RutVH4AAAAA"
        className="image-relative max-h-[660px] object-cover lg:object-fill"
        fill
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src="/images/profile.webp"
        style={{ objectPosition: 'top' }}
      />
      <div className="absolute -left-3 -top-3 h-20 w-20">
        <AboutMeSvg />
      </div>
    </Col>
  </Grid>
)

export default React.memo(AboutMe)
