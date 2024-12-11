import WalletPaymentInfo from "@/app/components/WalletPaymentInfoSec/WalletPaymentInfo";
import WalletTotalBalance from "@/app/components/WalletTotalBalanceSec/WalletTotalBalance";
import WalletTransactions from "@/app/components/WalletTransactionsSec/WalletTransactions";

export default function WalletPage() {
    return (
        <>
            <WalletTotalBalance />
            <WalletTransactions />
            <WalletPaymentInfo />
        </>
    );
};