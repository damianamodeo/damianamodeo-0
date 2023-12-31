/* eslint-disable-next-line */
export interface ChevronSortProps {}

export function ChevronSort(props: ChevronSortProps) {
  return (<svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5 5 1 1 5m0 6 4 4 4-4"/>
</svg>
  );
}

export default ChevronSort;
