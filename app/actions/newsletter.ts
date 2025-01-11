'use server'

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email')

  // Validate email
  if (!email || typeof email !== 'string') {
    return {
      success: false,
      message: 'Please provide a valid email address'
    }
  }

  // Email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please provide a valid email address'
    }
  }

  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Here you would typically add the email to your newsletter service
    // For example: await addSubscriber(email)

    return {
      success: true,
      message: 'Thanks for subscribing!'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    }
  }
}

