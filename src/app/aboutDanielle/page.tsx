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
import portraitImage from '@/images/dani_cavallo.png'

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

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">

            <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">The Social Network (2010) Analysis and Review </h2>

            <h3 className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Danielle Cavallo </h3>

            <p>
              A sensible idea for entrepreneur Mark Zuckerberg would soon become a global phenomenon to all who know what Facebook is today. In a dramatic biography, director David Fincher and screenplay writer Aaron Sorkin do an exceptional job going hand-in-hand; both conveyed through film every question the audience was thinking/wondering about young Zuckerberg and his sudden success.

            </p>

            <p>
              It’s easy to see why the main concept/slogan behind The Social Network is, “You don’t get to 500 million friends, without making a few enemies. (1)” In business, you have to come to an understanding that there are going to be situations that outlaw other ones, like in Zuckerberg’s case. Zuckerberg was a student at Harvard when he established himself by innovating and creating a social media site, Facebook. However, Zuckerberg’s startup was nothing shy of infamous; Zuckerberg was sued by “two bothers that claimed he stole their idea, and the cofounder who was later squeezed out of the business. (2)
            </p>

            <p>
              The Social Network completely relates its self within the computer/tech industry for many reasons; First of all, Facebook was created through establishing an online program/website, and secondly it simply wouldn’t have gained such popularity if it wasn’t done through the/a computer because there was no “App” development process or “App” to download because there were no smartphones to use in such a capable environment that Facebook called for.
            </p>

            <p>
              Social Media has become an undisputed lion within every industries marketing and advertising campaign throughout the last several years. Some would argue, social media is the number one constitute in remaining one with consumers/gaining new prospective consumers to increase profit maximization of the next quarters to come within a company or startup.
            </p>

            <p>
              Is it shameful for marketing and advertising experts to rely so heavily on social media to reach their target markets and audiences? No, it is not; social media has been a driven tactic due to its increasing participation through/by the public. Zuckerberg changed the way computers overall would be used for future generations after creating Facebook.
            </p>

            <p>
              In a logical sense, Zuckerberg forced the “old” use of technology “out the door.” Granted Zuckerberg was the first of a string of innovative technologic/computer programming inventors. Zuckerberg made reaching your target audience and market as simple as updating your companies page; Zuckerberg forced “old timers” into a strategic marketing plan, and they didn’t even know it. Computer/software companies would soon be able to advertise their products and increase shareholder expectations through the ability to now reach a whole new target market through outlets such as Facebook and or social media all together.
            </p>

            <p>
              In an obvious conceptual world within the last decade of 2000 — 2010, technology has not only changed interpersonal communications between simple relationships, but also changed customer/consumer communication relationships within every industry (3). For example, the old strategic methods that long time banking corporation J.P. Morgan Chase has sustained; Chase had to change from their “comfortable” way/view of satisfying user expectations exponentially (4). Chase had to adapt to online banking (or in generally create their own form of it) just as every other user friendly banking corporation did; user friendly because it was/became more convenient for their consumers to go online for banking purposes, than it would be to go into a banks branch and personally speak to a teller. For industry moguls such as Morgan/Chase or Nike, both have had to adapt to the new concepts of revolving their paramount empires around the new computer programs being implemented through innovative technologies; Chase and Nike would now through Facebook, be able to expand their consumer base by advertising through Facebook. Personally, Zuckerberg was mainly responsible for the instant attraction of technology within the current generation(s). Zuckerberg mandated the necessity of user accommodating pc’s/laptops and quickly updating/configuring capable software’s to go along with them.
            </p>

            <p>
              Entrepreneurs thrive and excel when realizing their current assets; for tech gurus such as Steve Jobs, this was proven true. Jobs comprehended the evolution of not only computers but also technology as a complete/overall asset; Jobs understood the importance of societal trends within the coming generations. The Zuckerberg generation was determined (still is) to change what was thought as the “simple” concept of doing things, and compile that concept into something much more simpler; however, that is innovation.

            </p>

            <p>
              It is fascinating to learn about historic industry tycoons, and how they played such a significant role in formulating today’s entrepreneur’s successes. If you look at Zuckerberg and his successes, you’ll see that you can relate him to industrialist Henry Ford; Ford made getting from one location to another “simpler” and more economical than riding a horse driven carriage. Ford understood that riding in a horse driven carriage was not only a luxury for the rich, but it was no obtainable by a mass market. I think that in Ford inventing/innovating the first car that could be purchased/affordable to a lower middle class, could be similarly associated with how Zuckerberg made it so individuals could stay in touch/up to date with friends/family/colleagues easier and quicker than actually having to visit them/email them. The wall/timeline aspect of Facebook revolutionized communication via social media because you don’t have to exactly ask someone/other members of your friends list how they are doing, you can just see for yourself. In Ford making a car even his own assembly line workers could purchase, and Zuckerberg creating a communication line through simpler means, both made the lives of everyday individuals simpler. (4)
            </p>

            <p>
              Zuckerberg first implemented his social networking site as a dating website, which ran online, and its sole purpose was for dating/romance concepts. In the grand scheme of things, Zuckerberg realized his new website growing in population and converted it into Facebook. By doing so, he insinuated two concepts; first, the dating world in college and so forth could be made simpler and overall more exciting, and secondly, through establishing Facebook, Zuckerberg made reaching ones peers and staying in contact with old friends into a way that was much more simplified. Zuckerberg also realized the prestige behind the Harvard email that was required to create a Facebook; Zuckerberg then later expanded the requirement to other university administrated emails, to overall any email to create an account.

            </p>

            <p>
              Jobs implemented a change within his company as opposed to Microsoft; Jobs made his “Macintosh” computers adverse looking and distinct, just like Zuckerberg and his view of online communication. Jobs realized not everyone wants to be an engineer and speak through the terminal to access a computer, so he made clickable graphics that later turned into the way an average user navigates through a PC. Zuckerberg made communicating simple to the point of posting a general thought for your friend list to see instead of telling all your comrades individually.

            </p>

            <p>
              Zuckerberg took the average communication between individuals and gave it a new meaning. Zuckerberg provoked the AOL Instant Messenger chat idea craze, or the simple e-mail and proved its meritocracy in comparison to his social networking site. Zuckerberg thought, why limit oneself to an instant message/chat room conversation and to a 20-color max option bio/profile when one could have a customized profile with a personalized wall and updated thriving Timeline incorporated with posts only from your choice of friends; no, we are not forgetting MySpace here, don’t worry.

            </p>

            <p>
              It has become important to incorporate Microsoft and Apple/Macintosh within this overview of The Social Network, mainly because Facebook wouldn’t be what it has become today without either competing corporations. Apple’s iPhone and other smart phones such as LG (or even the sidekick) made it possible for Zuckerberg Facebook users to go handheld; therefor, Zuckerberg’s users didn’t have to be held down to their PC’s to access Facebook. Jobs creating clickable navigation instead of code for a user to communicate through a PC, helped Zuckerberg immensely. Through the creation of social media sites such as Facebook, smart phones and computers grew simultaneously. Program innovators had to equip and update their coding with the new software’s implemented by for example, Apple.

            </p>

            <p>
              Zuckerberg knew he needed to take his social network and make it hand held through a universal application, just as Jobs knew this new and upcoming generation of Facebook crazed users wanted color, style, and differentiation within their products. Zuckerberg knew the more he personalized Facebook, the more users would join; in comparison to Jobs understanding that he could sell more Mac’s with color dominating characteristics on the outer appearance of the monitors/pc’s, where as IBM for example, fell short (in personalization).
            </p>

            <p>
              The Social Network completely changed the way most consumers used their computers; therefor constituting not only progressive technologic innovations, but also the mobility of browser/internet access. Given, there are many other abiding factors that constituted towards the revolution of technology overall, but young Zuckerberg surely is partially responsible for dominating the industry known as “tech.”Nevertheless, other social networking sites such as MySpace that started emerging, were also very successful. However, in comparison of thriving corporations/companies/brands/trends that managed to stay a-float under any circumstances, i.e., Apple vs. IBM, BestBuy vs. RadioShack, AOL vs. Google, to even the most obvious comparison of Facebook and MySpace, Zuckerberg has proven he has mastered his industry.
            </p>

            <p>
              Overall, social media tycoon Mark Zuckerberg proved something even a Harvard education at the time couldn’t teach/convey to young entrepreneurs, which is why Zuckerberg dropped out. Zuckerberg, through self-knowledge, trial and error, and tactical surrounding observational skills, proved technology is almost half as profitable and thriving without societal participation and competence; as with site/program/App development, innovators/entrepreneurs wouldn’t have the ability to mass market their products/ideas (Facebook) without the concurrent development/configurations of new technologies. Zuckerberg’s empire first started off, as a concept as seen in the film, then became a highly trafficked website/network, which led to his billions of success and outstanding ratios. Although, without the use of a computer, young Zuckerberg wouldn’t have had such success within the industry; tech would be much less formal. It all started with a computer, made in a garage. Moreover, technologies such as computers and software overall, thrive off of societal adaption, just as the societal environment thrives off of constant allocation of interests/needs/wants/demands through computers and other technologies.

            </p>

            <p>
              1
              (1)You don’t get to 500 million friends, without making a few enemies. [Advertisement]. (2010). Retrieved February 12, 2015 from The Social N.etwork website (2). The Social Network. (1990–2015). Retrieved February 11, 2015, from IMBD (3) F. (2012, September 24). 5 Ways Social Media Takes Customer Relationships To The Next Level. Retrieved February 12, 20, from Forbes. (4) T. (Director). (2012). The Men who Built America [Video file]. Retrieved February 9, 2015, from Netflix

            </p>



          </div>

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">

<h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Local Storage vs. Marketing, with cybersecurity considered </h2>

<h3 className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Danielle Cavallo </h3>

<p>
Throughout my recent project, I fell vulnerable to utilizing “local storage.”
</p>

<p>
As I touched base within my creative brief, I decided to somehow utilize my marketing degree within my code to sustain my current website. Now that I have gained access to vast amounts of cybersecurity knowledge, I can better assess an overall business plan to provide to my clients and time management allotment for my website, The Cavallo Company. I decided upon a future footer for the future of my website; this footer would simply allow users to experience our platform whilst entering their data, which would ultimately be saved within our local storage. As a user contributes to our local storage, we begin to grow not only qualitatively, but quantitatively. 
</p>

<p>
We can capitalize on mimicking the same platform for our clients while showing our clients how secure our platforms are. 
</p>

<p>
Understanding how to extract that data, whilst creatively designing the framework, gave me a true advantage.
</p>

<p>
All user data was recorded whilst appreciating the sleek and sheer minimalism in my design.
</p>

<p>
I put forth a design that required true data. I believe in utilizing all of my skills concurrently, I can offer my clients a business plan that allows the owners the ability to create a certain budget ceiling, while the heads of various IT sectors operating, help decide where to allocate these funds.
</p>

<p>
These funds will be easier assessed by risk management and through penetrating our clients network for full disclosure of possible cyber attacks in the future. 
</p>


</div>


        </div>
        <div className="lg:pl-20">
          <ul role="list">
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
