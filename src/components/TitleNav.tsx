import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface Props {
  title: string;
  scrollLeft: any;
  scrollRight: any;
}

function TitleNav({ title, scrollLeft, scrollRight }: Props) {
  return (
    <div className='container-fluid mt-3'>
      <div
        className='d-flex justify-content-center align-items-center gap-2'
        style={{ color: 'var(--gray)' }}
      >
        <div
          className='text-uppercase text-center'
          style={{ letterSpacing: '.3rem' }}
        >
          {title}
        </div>
        <div style={{ height: '2px', flex: ' 1', backgroundColor: 'var(--gray)' }} />
        <div className='d-flex justify-content-center align-items-center fs-3'>
          <BiChevronLeft
            onClick={scrollLeft}
            color='var(--purple)'
          />
          <BiChevronRight
            onClick={scrollRight}
            color='var(--purple)'
          />
        </div>
      </div>
    </div>
  );
}

export default TitleNav;
