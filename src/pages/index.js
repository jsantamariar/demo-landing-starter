import React, {useRef} from 'react'
import Head from 'next/head'

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss'
import { Observe } from 'src/helpers';

export default function Home() {
  const rocketRef = useRef();
  const textRef = useRef();
  const descriptionRef = useRef();
  const [isRocketVisible, setIsRocketVisible] = React.useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = React.useState(false);

  React.useEffect(() => {
      Observe(descriptionRef, isDescriptionVisible, setIsDescriptionVisible);
      Observe(rocketRef, isRocketVisible, setIsRocketVisible);
  }, [isDescriptionVisible, isRocketVisible]); 

    
  return (
    <Layout>
      <Head>
        <title>Space Jelly</title>
        <meta name="description" content="Cosmic web dev tutorials that will shock you with joy!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>
            Space Jelly
          </h1>

          <p className={styles.subtitle}>
            Cosmic web dev tutorials that will shock you with joy!
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>
            Latest Posts
          </h2>

          <ul className={styles.posts}>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-automatically-tag-categorize-images-using-ai-with-google-vision-cloudinary/">
                How to Automatically Tag & Categorize Images Using AI with Google Vision & Cloudinary
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-authenticate-spotify-web-api-requests-in-next-js-with-netlify-api-auth/">
                How to Authenticate Spotify Web API Requests in Next.js with Netlify API Auth
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/posts/how-to-generate-personalized-social-media-cards-for-landing-pages-with-next-js-cloudinary/">
                How to Generate Personalized Social Media Cards for Landing Pages with Next.js & Cloudinary
              </a>
            </li>
          </ul>
        </Container>
      </Section>

      <Section backgroundColor="primary">
        <Container>
          <h2 className={styles.heading}>
            Courses
          </h2>

          <ul className={styles.posts}>
            <li>
              <a href="https://egghead.io/courses/create-an-ecommerce-store-with-next-js-and-stripe-checkout-562c?af=atzgap">
                Create an eCommerce Store with Next.js and Stripe Checkout
              </a>
            </li>
            <li>
              <a href="https://spacejelly.dev/levelupecommerce">
                Ecommerce on the Jamstack
              </a>
            </li>
            <li>
              <a href="https://fromdesignto.dev/">
                From Design to Development
              </a>
            </li>
          </ul>
        </Container>
      </Section>

      <Section backgroundColor="secondary">
        <Container>
          <h2 className={styles.heading}>
            Filler content
          </h2>

          <p>There can be something cool here too.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>
            Filler content
          </h2>

          <p>There can be something cool here too.</p>
        </Container>
      </Section>

      <Section backgroundColor="primary">
        <Container>
          <h2 className={styles.heading}>
            Magic 🪄
          </h2>

          <p ref={rocketRef}>
            <span className={`${styles.rocket} ${isRocketVisible ? styles.rocketAnimation : ''}`}>
              🚀
            </span>  
          </p>
        </Container>
      </Section>

      <Section backgroundColor="secondary">
        <Container>
          <h2 ref={textRef} className={styles.heading}>
          { isDescriptionVisible ? " Have you scrolled down here yet? 🧐" : "It is visible"}
          </h2>
          <p ref={descriptionRef} {...(isDescriptionVisible ? {className: styles.animateDescription} : {className: styles.description}) }>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className={styles.heading}>
            Call to Action
          </h2>
          <p>Sign up now!</p>
        </Container>
      </Section>
    </Layout>
  )
}