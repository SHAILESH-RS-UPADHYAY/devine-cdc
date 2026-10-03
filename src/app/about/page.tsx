import type { Metadata } from "next";
import { PHOTOS } from "@/lib/site-content";
import { Icon } from "@/components/site/Icon";
import { Photo } from "@/components/site/Photo";
import { Banner, Btn, Duo, Eyebrow, PageHero, Pillars, Quote, Section, SectionHead, Title } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Devine Child Development Centre in Gurugram: our story, mission, values, founder Mrs. Komal Pahuja (Clinical Psychologist, RCI licensed) and our multidisciplinary team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Devine"
        before="Every child has their own way of "
        accent="growing."
        lead="We look beyond a diagnosis or difficulty and understand each child as a whole: their strengths, their needs and the way they experience the world."
        actions={
          <>
            <Btn href="/consultation">Book a Consultation</Btn>
            <Btn href="/team" kind="secondary">
              Meet Our Team
            </Btn>
          </>
        }
        photo={PHOTOS.rangoli}
        note={
          <>
            Small steps,
            <br />
            big futures
          </>
        }
        chip={{ icon: "shield", title: "RCI Licensed", text: "Clinical psychologist-led" }}
      />

      <Section id="story">
        <div className="pg-split">
          <div className="pg-split__copy">
            <Eyebrow>Our story</Eyebrow>
            <Title before="Every child is different, and that’s what makes them " accent="beautifully unique." />
            <div className="pg-prose reveal">
              <p className="pg-prose__lead">
                At Devine CDC, we believe a happy mind creates the space for meaningful growth. With compassion, understanding and an integrated approach, we
                meet every child where they are.
              </p>
              <p>
                From early developmental concerns to communication, behaviour, learning, sensory and emotional needs, we look beyond a diagnosis or difficulty
                and understand the child as a whole.
              </p>
            </div>
            <Quote text="Every child deserves to be understood before they are expected to change." />
            <div className="pg-prose reveal">
              <p>
                We want every child to walk through our doors with a smile. When a child feels safe, understood and cared for, progress becomes a natural part of
                their journey.
              </p>
            </div>
          </div>
          <figure className="pg-split__media reveal">
            <Photo photo={PHOTOS.teamWithFamilies} sizes="(max-width: 960px) 90vw, 500px" />
            <figcaption className="pg-note">Your safe space</figcaption>
          </figure>
        </div>
      </Section>

      <Section className="pg-alt">
        <SectionHead eyebrow="Mission & vision" before="Why we " accent="do this" mode="center" />
        <Duo
          items={[
            {
              icon: "target",
              tint: 1,
              title: "Our Mission",
              text: "To create a safe and compassionate space where both children and parents feel heard, understood and supported, through personalised care that respects every child’s unique needs.",
            },
            {
              icon: "eye",
              tint: 3,
              title: "Our Vision",
              text: "To help children make meaningful progress in the shortest time possible, with the right support for their individual needs.",
            },
          ]}
        />
      </Section>

      <Section>
        <SectionHead eyebrow="Our values" before="What guides " accent="every session" mode="center" />
        <Pillars
          items={[
            { icon: "heart", tint: 1, title: "Child-Centred", text: "Every plan starts with your child." },
            { icon: "users", tint: 2, title: "Parent-Involved", text: "Parents are part of every step." },
            { icon: "sprout", tint: 3, title: "Compassionate", text: "Warmth and patience in every session." },
            { icon: "puzzle", tint: 4, title: "Collaborative", text: "One team, planning together." },
            { icon: "smile", tint: 5, title: "Inclusive", text: "Every child is welcome here." },
          ]}
        />
      </Section>

      <Section id="founder">
        <div className="pg-founder">
          <figure className="pg-founder__img reveal">
            <Photo photo={PHOTOS.founder} sizes="(max-width: 960px) 90vw, 440px" />
            <span className="pg-founder__badge">
              <span className="pg-ic pg-t3">
                <Icon name="shield" />
              </span>
              <span>
                <strong>RCI Licensed</strong>
                <span>M.Phil Clinical Psychology</span>
              </span>
            </span>
          </figure>
          <div>
            <Eyebrow>Meet the founder</Eyebrow>
            <Title before="Mrs. Komal " accent="Pahuja" />
            <p className="pg-founder__role reveal">Founder &amp; Clinical Psychologist · M.Phil Clinical Psychology · RCI Licensed</p>
            <Quote text="No two children are the same, so their support shouldn’t be either." />
            <div className="pg-prose reveal">
              <p>
                My vision is to understand each child as an individual: their sensory needs, strengths, challenges, communication and the way they experience the
                world. Then we build personalised support around them.
              </p>
              <p>
                Just as importantly, parents should be a part of the process, not just observers. They deserve to understand their child, feel supported and know
                how to continue that support beyond the therapy room.
              </p>
              <p>
                <strong>
                  Through Devine CDC, I want to help create a culture of child development where therapy is purposeful, personalised and genuinely beneficial for
                  both the child and the family.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pg-alt">
        <div className="pg-split pg-split--rev">
          <div className="pg-split__copy">
            <Eyebrow>Our team</Eyebrow>
            <Title before="One team, planning " accent="together." />
            <div className="pg-prose reveal">
              <p className="pg-prose__lead">
                Our multidisciplinary team brings together professionals from different areas of child development, working collaboratively to understand each
                child’s needs and create personalised support plans.
              </p>
            </div>
            <ul className="pg-tags reveal">
              <li>Clinical Psychology</li>
              <li>Speech &amp; Language Therapy</li>
              <li>Occupational Therapy</li>
              <li>ABA Therapy</li>
              <li>Special Education</li>
            </ul>
            <div className="pg-actions reveal">
              <Btn href="/team">Meet Our Full Team</Btn>
            </div>
          </div>
          <figure className="pg-split__media reveal">
            <Photo photo={PHOTOS.team} sizes="(max-width: 960px) 90vw, 500px" />
          </figure>
        </div>
      </Section>

      <Banner lines={["Different journeys.", "Meaningful progress.", "Together."]} action={<Btn href="/consultation" kind="light">Book a Consultation</Btn>} />
    </>
  );
}
