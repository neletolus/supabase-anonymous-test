import Hero from "@/components/hero";
import { signInAnonymouslyAction } from "./actions";
import { SubmitButton } from "@/components/submit-button";
import { createClient } from "@/utils/supabase/client";

export default async function Index() {
  const supabase = createClient();
  // ユーザーが匿名かどうかを確認
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <>
      <Hero />
      <div className="flex justify-center mt-8">
        <form>
          <SubmitButton formAction={signInAnonymouslyAction}>匿名でアカウント登録</SubmitButton>
        </form>
      </div>
    </>
  );
}
