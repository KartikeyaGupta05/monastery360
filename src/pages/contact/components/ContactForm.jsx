import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 spiritual-shadow">
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-muted-foreground mb-4">
            Thank you for reaching out to us. We'll get back to you within 24-48 hours.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setIsSubmitted(false)}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 spiritual-shadow">
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
          Get in Touch
        </h2>
        <p className="text-muted-foreground">
          Have questions about our heritage preservation mission? We'd love to hear from you.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData?.name}
          onChange={handleInputChange}
          error={errors?.name}
          required
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData?.email}
          onChange={handleInputChange}
          error={errors?.email}
          description="We'll never share your email with anyone else"
          required
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your inquiry, partnership interest, or how we can help preserve cultural heritage..."
            value={formData?.message}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-lg font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none ${
              errors?.message 
                ? 'border-error bg-error/5' :'border-border bg-input'
            }`}
            required
          />
          {errors?.message && (
            <p className="text-sm text-error flex items-center gap-1">
              <Icon name="AlertCircle" size={14} />
              {errors?.message}
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            Minimum 10 characters required
          </p>
        </div>

        <Button
          type="submit"
          variant="default"
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          fullWidth
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground text-center">
          <Icon name="Clock" size={14} className="inline mr-1" />
          We typically respond within 24-48 hours during business days
        </p>
      </div>
    </div>
  );
};

export default ContactForm;