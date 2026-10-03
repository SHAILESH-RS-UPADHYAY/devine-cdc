import { PHOTOS } from "@/lib/site-content";
import { Icon } from "@/components/site/Icon";
import { Photo } from "@/components/site/Photo";
import { Btn, PageHero, Section, SectionHead, Topics } from "@/components/site/blocks";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        before="Oops! This page took a "
        accent="different path."
        lead="The page you’re looking for doesn’t seem to exist, but don’t worry, let’s get you back on track."
        extra={
          <p className="pg-404 reveal" aria-hidden="true">
            4
            <span>
              <Icon name="heart" fill />
            </span>
            4
          </p>
        }
        actions={
          <>
            <Btn href="/">Go to Homepage</Btn>
            <Btn href="/programs" kind="secondary">
              Browse Our Programmes
            </Btn>
          </>
        }
        side={
          <figure className="pg-hero__media reveal">
            <div className="pg-hero__frame">
              <Photo photo={PHOTOS.trampoline} className="pg-hero__img" sizes="(max-width: 960px) 90vw, 520px" eager />
            </div>
          </figure>
        }
      />
      <Section>
        <SectionHead eyebrow="Looking for something?" before="Here are some " accent="helpful links." mode="center" />
        <Topics
          items={[
            { icon: "home", tint: 1, title: "Home", text: "Back to where it all begins", href: "/" },
            { icon: "users", tint: 2, title: "Programmes", text: "Explore our support programmes", href: "/programs" },
            { icon: "puzzle", tint: 3, title: "Therapies", text: "Discover how we help", href: "/therapies" },
            { icon: "book", tint: 4, title: "Resources", text: "Worksheets for home", href: "/resources" },
            { icon: "message", tint: 5, title: "FAQ", text: "Answers to common questions", href: "/faq" },
            { icon: "phone", tint: 1, title: "Contact", text: "We’re here to help", href: "/contact" },
          ]}
        />
      </Section>
    </>
  );
}
