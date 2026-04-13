import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Pagination({ entriesNo, entriesPerPage, currentPage }) {
    let originalArray = useRef([]);
    let maxPages = useRef(0);
    const [pageArray, setPageArray] = useState([]);
    // const originalArray.current = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    useEffect(processPaginationArray,[currentPage]);
    function processPaginationArray() {
        maxPages.current = Math.ceil(entriesNo/entriesPerPage);
        originalArray.current = [];
        for(let i = 1;i<=maxPages.current;i++){
            originalArray.current.push(i);
        }
        
        currentPage = Number(currentPage);
        if (currentPage == 1) {
            let dotFlag = false;
            setPageArray(originalArray.current.map((page) => {
                if (page <= 3 || page == maxPages.current) {
                    return page;
                } else if (dotFlag == false) {
                    dotFlag = true;
                    return "...";
                }else{
                    return null;
                }
            }));
        } else if (currentPage == maxPages.current) {
            let dotFlag = false;
            setPageArray(originalArray.current.map((page) => {
                if (page==1 || page >= maxPages.current-2 ) {
                    return page;
                } else if (dotFlag == false) {
                    dotFlag = true;
                    return "...";
                }else{
                    return null;
                }
            }));

        } else {
            let leftDotFlag = false;
            let rightDotFlag = false;
            setPageArray(originalArray.current.map((page) => {
                if (page==1 || page == maxPages.current || ((page>=currentPage-1)&&(page<=currentPage+1)) ) {
                    return page;
                } else if (page<currentPage && leftDotFlag == false) {
                    leftDotFlag = true;
                    return "...";
                } else if((page>currentPage &&page<maxPages.current) && rightDotFlag == false){
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
                <ul className="flex -space-x-px text-sm">
                    <li>
                        <NavLink to={currentPage > 1 ? `/products/${Number(currentPage) - 1}` : "#"} className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-9 h-9 focus:outline-none">
                            <span className="sr-only">Previous</span>
                            <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" /></svg>
                        </NavLink>
                    </li>
                    {pageArray.map((page) => {
                        return page && <NavLink
                        to={page == "..."?"#":`/products/${page}`}
                        className={"flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none"}>{page}</NavLink>
                    })}
                    <li>
                        <NavLink to={currentPage < maxPages.current ? `/products/${Number(currentPage) + 1}` : "#"} className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-9 h-9 focus:outline-none">
                            <span className="sr-only">Next</span>
                            <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
                        </NavLink>
                    </li>
                </ul>
            </nav>


        </>
    );
}

export default Pagination;