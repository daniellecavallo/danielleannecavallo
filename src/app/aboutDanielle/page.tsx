import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon, 
  InstagramIcon,
  LinkedInIcon, 
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/cute.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About Danielle',
  description:
    'Danielle Cavallo: Guiding Lives, Empowering Futures.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Danielle Cavallo: Guiding Lives, Empowering Futures
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>Danielle Cavallo is an accomplished individual with a diverse and impressive background, combining her expertise in finance, technology, and philanthropy to create a positive impact on the world. Born with a natural affinity for learning and a compassionate heart, Danielle&#39;s journey towards success began with a Bachelor&#39;s degree in Marketing from Caldwell University. Her dedication to academic excellence was recognized as she graduated with honors and was inducted into the prestigious Kappa Gamma Pi honor society.</p>

            <p>The financial industry became Danielle&#39;s chosen path, where she devoted the last ten years to guiding clients towards better retirement and financial decisions. Her unique approach, grounded in empathy and a keen understanding of her clients&#39; needs, has garnered her a reputation as a trusted and reliable advisor in the field.</p>

            <p>But Danielle&#39;s interests didn&#39;t stop there. Driven by her passion for technology, she decided to expand her knowledge by pursuing studies in software engineering and cybersecurity at Columbia University. With an unyielding thirst for knowledge, she aspires to delve into the world of digital defense, cybersecurity, recognizing its vital role in safeguarding individuals and organizations in the digital age.</p>

            <p>Beyond her professional accomplishments, Danielle is a woman of profound kindness and a strong sense of responsibility towards her community. She runs a non-profit organization dedicated to assisting the homeless, providing them with water, food, and opportunities to rebuild their lives through conversation and hope. Her partnership with Great Harvest Bread Co in Nashville has further strengthened her mission to alleviate the hardships faced by the less fortunate. Danielle has also devoted over 450 hours to The American Cancer Society and doesn&#39;t plant to stop there. </p>

            <p> Apart from her remarkable work, Danielle has diverse interests that keep her engaged and balanced. She is an avid enthusiast of Muay Thai, Pilates, and various sports, valuing the importance of physical well-being as much as intellectual growth. Her involvement in these activities also fosters camaraderie within her communities, where she is known for her friendly and approachable nature.</p>

            <p>While Danielle has made a significant impact within the circles she belongs to, her dreams and aspirations extend beyond regional boundaries. Eager to make her presence known to the world, she remains committed to using her skills and knowledge to uplift lives, champion causes she believes in, and contribute to the betterment of society.</p>

            <p>In summary, Danielle Cavallo is a remarkable individual whose journey is marked by determination, compassion, and an unwavering commitment to making a difference. As she continues to explore new horizons in both her professional and personal life, she remains an inspiring figure and a beacon of hope for those she touches with her positive influence.</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/daniellecavallo" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/daniellecavallo" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:thecavallocompany@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              thecavallocompany@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
