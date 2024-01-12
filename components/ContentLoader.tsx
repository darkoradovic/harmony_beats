import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ContendLoaderProps {
  type: "sidebar" | "main" | "search";
}

const ContentLoader: React.FC<ContendLoaderProps> = ({ type }) => (
  <>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton height={125} width={125} containerClassName="avatar-skeleton" />
      <Skeleton width={100} />
      <Skeleton width={70} />
    </SkeletonTheme>
  </>
);

export default ContentLoader;
