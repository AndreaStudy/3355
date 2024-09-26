import {
  getBottomCategories,
  getMiddleCategories,
} from '@/actions/category/categoryActions';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  middleCategoryDataType,
  topCategoryDataType,
} from '@/types/ResponseTypes';
import { ChevronDown, Slash } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

async function CategoryBreadcrumb({
  topCategories,
  mainId,
  subId,
}: {
  topCategories: topCategoryDataType[];
  mainId: number;
  subId?: number;
}) {
  const topCategoryName = topCategories.map((c) => {
    if (c.id == mainId) return c.topCategoryName;
  });
  const middleCategories: middleCategoryDataType[] = (
    await getMiddleCategories(mainId)
  ).filter((category) => category.middleCategoryName === '카테고리');
  const subCategories =
    middleCategories && middleCategories.length > 0
      ? await getBottomCategories(middleCategories[0].id)
      : [];
  const subCategoryName = subCategories.map((c) => {
    if (c.id == subId) return c.bottomCategoryName;
  });
  return (
    <Breadcrumb className="w-full px-4 py-2 border-b">
      <BreadcrumbList>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-starbucks-green font-bold">
              {topCategoryName}
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {topCategories.map((c) => {
                return (
                  <Link key={c.id} href={`/category?mainId=${c.id}`}>
                    <DropdownMenuItem>{c.topCategoryName}</DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        {subCategories.length > 0 && (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-starbucks-green font-bold">
                  {subId ? subCategoryName : '전체보기'}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {subCategories.map((c) => {
                    return (
                      <Link
                        key={c.id}
                        href={`/category?mainId=${mainId}&subId=${c.id}`}
                      >
                        <DropdownMenuItem>
                          {c.bottomCategoryName}
                        </DropdownMenuItem>
                      </Link>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default CategoryBreadcrumb;
