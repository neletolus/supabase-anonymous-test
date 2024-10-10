import { setPasswordAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SetPassword({ searchParams }: { searchParams: { message?: string } }) {
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">パスワードを設定してください</h1>
      <p className="text-sm text-foreground/60">
        セキュリティのため、新しいパスワードを設定してください。
      </p>
      <Label htmlFor="password">新しいパスワード</Label>
      <Input
        type="password"
        name="password"
        placeholder="新しいパスワード"
        required
      />
      <Label htmlFor="confirmPassword">パスワードの確認</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="パスワードの確認"
        required
      />
      <SubmitButton formAction={setPasswordAction}>
        パスワードを設定
      </SubmitButton>
      {searchParams.message && <FormMessage message={{ error: searchParams.message }} />}
    </form>
  );
}