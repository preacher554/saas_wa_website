import { MessageCircle } from "lucide-react";
import FeatureList from "./FeatureList.jsx";
import { chatNativeFeatures } from "../data/siteData.js";

export default function ChatNativeFeature() {
  return (
    <section className="section-pad">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-2">
        <div className="machined-card p-6">
          <div className="chat-native-card">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-acid">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <strong>Natural chat mode</strong>
                <p>Ringkas, ramah, tidak terasa seperti brosur.</p>
              </div>
            </div>
            <div className="bubble outgoing">Ready kak.</div>
            <div className="bubble outgoing">Untuk dikirim ke kota mana ya?</div>
            <div className="bubble incoming">Jakarta.</div>
            <div className="bubble outgoing">Oke, aku bantu cek opsi kirimnya dulu ya.</div>
          </div>
        </div>
        <div>
          <p className="section-tag">Chat Native Writing</p>
          <h2 className="section-title text-left">Chat yang Terasa Natural, Bukan Brosur AI</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            Di chat, terlalu formal justru terasa jauh. Agent diarahkan memakai bubble pendek, ritme tanya yang manusiawi, dan gaya brand yang sesuai.
          </p>
          <div className="mt-8">
            <FeatureList items={chatNativeFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
}
