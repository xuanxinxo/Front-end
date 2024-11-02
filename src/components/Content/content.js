import '../../styles/content.css'
function Content () {
    return(
        <div className="how-it-works">
        <h2>How It Works?</h2>
        <div className="info-cards">
          <div className="card">
            <div className="card-icon">🧑‍🤝‍🧑</div>
            <div className="card-title">1. Two-Level Referral System</div>
            <div className="card-text">
              Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)
            </div>
          </div>
          <div className="card">
            <div className="card-icon">💸</div>
            <div className="card-title">2. Earn Rebates & Commissions</div>
            <div className="card-text">
              Earn rebates on your trades and commissions from F1 and F2.
            </div>
          </div>
          <div className="card">
            <div className="card-icon">📅</div>
            <div className="card-title">3. Claim Daily Rewards</div>
            <div className="card-text">
              Rewards are credited after trades close and claimable daily at 0:00 UTC.
            </div>
          </div>
          <div className="card">
            <div className="card-icon">🏆</div>
            <div className="card-title">4. Referral Tier System</div>
            <div className="card-text">
              Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days.
            </div>
          </div>
        </div>
      </div>
    )
}
export default Content;