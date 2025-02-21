"use client";
import React from 'react'
import { Loader2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { columns } from './columns';
import { useNewAccount } from '@/features/accounts/hooks/use-new-account';
import { useBulkDeleteAccounts } from '@/features/accounts/api/use-bulk-delete-accounts';
import { useGetAccounts } from '@/features/accounts/api/use-get-accounts';


function AccountsPage() {
    const { onOpen } = useNewAccount();
    const deleteAccounts = useBulkDeleteAccounts();
    const { data, isLoading } = useGetAccounts();
    const isDisabled = isLoading || deleteAccounts.isPending;

  if(isLoading){
    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Loader2 className="size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }  
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
        <CardTitle className="text-xl line-clamp-1">
          Accounts page
        </CardTitle>
        <Button onClick={onOpen} size="sm">
          <Plus className="size-4 mr-2" />
          Add new
        </Button>
      </CardHeader>
      <CardContent>
        <DataTable
          filterKey="name"
          columns={columns} 
          data={data!}
          onDelete={(row) => {
            console.log(row);
            const ids = row.map((r) => r.original.id);
            deleteAccounts.mutate({ ids });
          }}
          disabled={isDisabled}
        />
      </CardContent>
    </Card>
  </div>
  )
}

export default AccountsPage
