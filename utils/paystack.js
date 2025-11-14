export const initializePaystack = (email, amount, reference, callback) => {
  if (typeof window === 'undefined' || !window.PaystackPop) {
    console.error('Paystack not loaded');
    return;
  }

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  
  if (!publicKey) {
    console.error('Paystack public key not found');
    alert('Payment configuration error. Please contact support.');
    return;
  }

  const handler = window.PaystackPop.setup({
    key: publicKey,
    email: email,
    amount: Math.round(amount * 100), // Convert to kobo
    currency: 'NGN',
    ref: reference,
    callback: function(response) {
      console.log('Payment successful:', response);
      callback(response);
    },
    onClose: function() {
      console.log('Payment window closed');
      alert('Transaction was not completed. You can try again.');
    },
  });

  handler.openIframe();
};

export const generateReference = () => {
  return `SOLAR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Optional: Verify payment on your backend
export const verifyPayment = async (reference) => {
  try {
    const response = await fetch('/api/verify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ reference }),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Payment verification failed:', error);
    return null;
  }
};