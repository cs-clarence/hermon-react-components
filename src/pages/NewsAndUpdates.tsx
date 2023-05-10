import { Card } from "$components";

export function NewsAndUpdatesPage() {
  return (
    <Card className="w-full flex flex-col p-12 gap-8">
      <h2 className="text-headline-large font-medium">News and Updates</h2>
      <Card className="material flex flex-col gap-16 container-surface elevation-level2 surface-overlay-primary/elevation-surface-tint">
        <h3 className="text-headline-small font-medium">Developers' Note</h3>
        <p>
          Hi, we are now on the power user testing stage, we are working very
          hard to produce you the best software experience. Some data are still
          static, new features will be released very soon. Meanwhile, you can
          play around to try and experience.
          <br />
          <br />
          New Features:
          <br />
           Advance monthly maintenance purchase.
          <br />
          Geographic sales.
          <br />
          Chat support.
          <br />
          Sales report.
          <br />
          Commission report.
          <br />
          Active/Inactive user.
          <br />
          <br />
          Release version 1.0.0
        </p>
        <p className="text-on-surface-variant">Just now</p>
      </Card>

      <Card className="material flex flex-col gap-16 container-surface elevation-level2 surface-overlay-primary/elevation-surface-tint">
        <h3 className="text-headline-small font-medium">
          Message from the Founders
        </h3>
        <p>
          We can never express our gratitude in every word but feel our
          salutation for every hard working individuals who does not only strive
          to work hard for their success but also makes success ordinary for
          every person to reach. This 2023, our goal remains intact and our
          mission still rolls on track. The only changes we would like to
          promise you is that we are committed in serving you greater changes
          with the best that we could. New things are on the way. New dreams are
          finally plotting with our reality. We are delighted to welcome a new
          year with all of you!
        </p>
        <p className="text-on-surface-variant">Jan 1, 12:00AM</p>
      </Card>
    </Card>
  );
}
