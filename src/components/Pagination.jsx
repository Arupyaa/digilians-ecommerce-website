import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Pagination({ entriesNo, entriesPerPage, currentPage="1" }) {
    let originalArray = useRef([]);
    const [pageArray, setPageArray] = useState([]);
    // const originalArray.current = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    useEffect(processPaginationArray,[]);
    function processPaginationArray() {
        let maxPages = Math.ceil(entriesNo/entriesPerPage);
        for(let i = 1;i<=maxPages;i++){
            originalArray.current.push(i);
        }
        
        currentPage = Number(currentPage);
        if (currentPage == 1) {
            let dotFlag = false;
            setPageArray(originalArray.current.map((page) => {
                if (page <= 3 || page == maxPages) {
                    return page;
                } else if (dotFlag == false) {
                    dotFlag = true;
                    return "...";
                }
            }));
        } else if (currentPage == maxPages) {
            let dotFlag = false;
            setPageArray(originalArray.current.map((page) => {
                if (page==1 || page >= maxPages-2 ) {
                    return page;
                } else if (dotFlag == false) {
                    dotFlag = true;
                    return "...";
                }
            }));

        } else {
            let leftDotFlag = false;
            let rightDotFlag = false;
            setPageArray(originalArray.current.map((page) => {
                if (page==1 || page == maxPages || ((page>=currentPage-1)&&(page<=currentPage+1)) ) {
                    return page;
                } else if (page<currentPage && leftDotFlag == false) {
                    leftDotFlag = true;
                    return "...";
                } else if((page>currentPage &&page<maxPages) && rightDotFlag == false){
                    rightDotFlag = true;
                    return "...";
                }else{
                    return null;
                }
            }));
        }
    }

    return (
        <>
            <nav className="mb-[30px]">
                {/* example navlink element
                <NavLink href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</NavLink> */}
                <ul class="flex -space-x-px text-sm">
                    <li>
                        <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-9 h-9 focus:outline-none">
                            <span class="sr-only">Previous</span>
                            <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" /></svg>
                        </a>
                    </li>
                    {pageArray.map((page) => {
                        return page && <NavLink className={"flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none"}>{page}</NavLink>
                    })}
                    <li>
                        <a href="#" class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-9 h-9 focus:outline-none">
                            <span class="sr-only">Next</span>
                            <svg class="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
                        </a>
                    </li>
                </ul>
            </nav>


        </>
    );
}

export default Pagination;