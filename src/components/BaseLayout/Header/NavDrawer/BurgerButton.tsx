import BurgerSVG from '@/components/assets/outlined/burger.svg?img';
import SvgImage from '@/components/common/Images/SvgImage';

type Props = {
  onClick: () => void;
};

export default function BurgerButton({ onClick }: Props) {
  return (
    <button
      data-testid="burger-button"
      onClick={onClick}
      className="flex h-[2.375rem] w-[2.375rem] items-center justify-center"
    >
      <i className="relative">
        <SvgImage
          src={BurgerSVG}
          alt="open navigation drawer"
          width={18}
          height={18}
        />
      </i>
    </button>
  );
}
