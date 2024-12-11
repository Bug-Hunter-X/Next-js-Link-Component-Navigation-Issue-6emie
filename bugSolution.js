```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/profile">
        <a>Go to Profile</a>
      </Link>
    </div>
  );
}

export default MyComponent;

// pages/profile.js
export default function Profile(){
  return <div>Profile Page</div>
}
```