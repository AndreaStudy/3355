import {
  getBottomCategories,
  getMiddleCategories,
  getTopCategories,
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
  mainName,
  subName,
}: {
  topCategories: topCategoryDataType[];
  mainName: string;
  subName?: string;
}) {
  const topCategoryId: number = (await getTopCategories()).find(
    (c) => c.topCategoryName === mainName
  )!.id;
  const middleCategories = (await getMiddleCategories(topCategoryId)).filter(
    (category) => category.middleCategoryName === '카테고리'
  );
  const subCategories =
    middleCategories && middleCategories.length > 0
      ? await getBottomCategories(middleCategories[0].id)
      : [];
  return (
    <Breadcrumb className="w-full px-4 py-2 border-b">
      <BreadcrumbList>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-starbucks-green font-bold">
              {mainName}
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {topCategories.map((c) => {
                return (
                  <Link
                    key={c.id}
                    href={`/category?mainName=${c.topCategoryName}`}
                  >
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
                  {!subName ? '전체보기' : subName}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {subCategories.map((c) => {
                    return (
                      <Link
                        key={c.id}
                        href={`/category?mainName=${mainName}&subName=${c.bottomCategoryName}`}
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
