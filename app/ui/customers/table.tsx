import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { FormattedCustomersTable } from '@/app/lib/definitions';

export default async function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              {/* Mobile view */}
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p className="font-medium">{customer.name}</p>
                        </div>
                        <p className="text-sm text-gray-500">{customer.email}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-gray-500">Pending</p>
                        <p className="font-medium">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-gray-500">Paid</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-gray-500">Total Invoices</p>
                        <p className="text-sm">{customer.total_invoices}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="text-sm font-medium text-black">{customer.total_revenue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-right">
                      Total Invoices
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-right">
                      Pending
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-right">
                      Paid
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium text-right">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group hover:bg-gray-50">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm group-first-of-type:rounded-tl-md group-last-of-type:rounded-bl-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p className="font-medium">{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm text-gray-500">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm text-right">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm text-right text-black">
                        {customer.total_pending}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm text-right text-black group-first-of-type:rounded-tr-md group-last-of-type:rounded-br-md">
                        {customer.total_paid}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm text-right font-medium text-black group-first-of-type:rounded-tr-md group-last-of-type:rounded-br-md">
                        {customer.total_revenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
