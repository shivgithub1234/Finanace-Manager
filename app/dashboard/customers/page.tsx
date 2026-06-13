import { Suspense } from 'react';
import { fetchFilteredCustomers, fetchCustomersPages } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import Search from '@/app/ui/search';
import Pagination from '@/app/ui/invoices/pagination';
import { lusitana } from '@/app/ui/fonts';

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query || '';
  const currentPage = Number(resolvedParams?.page) || 1;

  const [customers, totalPages] = await Promise.all([
    fetchFilteredCustomers(query, currentPage),
    fetchCustomersPages(query),
  ]);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        {/* <h1 className={`${lusitana.className} text-2xl`}>Customers</h1> */}
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search customers..." /> */}
      </div>
      <Suspense fallback={<p className="mt-4 text-gray-400">Loading customers...</p>}>
        <CustomersTable customers={customers} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
