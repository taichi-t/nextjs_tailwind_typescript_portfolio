import { useTheme } from '@/utils/themeContext';
export default function SoftSkill(): JSX.Element {
  const { isFontLoaded } = useTheme();
  return (
    <div className="p-6 border border-divider bg-paper mt-8 mobile:p-3">
      <div className="grid grid-cols-12 gap-3 text-primaryText table:gap-2 mobile:gap-1">
        <div className="col-span-6 mobile:col-span-12">
          <h2 className="about-list-title ">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              🔥 I'm really passionate about ...
            </span>
          </h2>
          <p className="about-list-content">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              coding and designing. I get a sense of satisfaction and joy
              whenever what I create brings others happiness.
            </span>
          </p>
        </div>
        <div className="col-span-6 mobile:col-span-12 mobile:mt-5">
          <h2 className="about-list-title">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              👀 My ambition is ...
            </span>
          </h2>
          <p className="about-list-content">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              to create my own web service, so I'm very interested in back-end
              programming. I see myself becoming a web developer who understands
              the ins and outs of what back-end developers and designers do as
              well.
            </span>
          </p>
        </div>
        <div className="col-span-6 mobile:col-span-12 mobile:mt-5">
          <h2 className="about-list-title">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              👥 When I work on a project, ...
            </span>
          </h2>
          <p className="about-list-content">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              I'm a great team player. I'm the sort of person who helps others
              when they're stuck with buggy codes and manages to find efficient
              solutions logically.
            </span>
          </p>
        </div>
        <div className="col-span-6 mobile:col-span-12 mobile:mt-5">
          <h2 className="about-list-title">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              🏋️‍♂️ Me time involves ...
            </span>
          </h2>
          <p className="about-list-content">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              taking photos—especially of interesting architecture—working out,
              and camping. I also love coding and programming in my spare time.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
