import { convertAnonymousAccountAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Message } from "@/components/form-message";
export default function ConvertAccount({ searchParams }: { searchParams: Message }) {
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">アカウントを本登録する</h1>
      <p className="text-sm text-foreground/60">
        メールアドレスを入力して、匿名アカウントを本登録アカウントに変更してください。
      </p>
      <Label htmlFor="email">メールアドレス</Label>
      <Input
        type="email"
        name="email"
        placeholder="you@example.com"
        required
      />
      <SubmitButton formAction={convertAnonymousAccountAction}>
        アカウントを更新
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}