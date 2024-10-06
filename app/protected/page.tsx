import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import SampleTable from "@/components/sample-table/sample-table";
import Link from "next/link";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const isAnonymous = user.is_anonymous

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      {isAnonymous && (
        <div className="flex justify-center">
          <Link href="/convert-account" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          本アカウント登録
          </Link>
        </div>
      )}
      {!isAnonymous && (
        <div className="flex justify-center">
        <Link href="/convert-account/set-password" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        パスワードを設定/更新する
        </Link>
      </div>
      )}
        <div className="w-full">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <SampleTable />
    </div>
  );
}
