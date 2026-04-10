import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Header } from '@/components/header';

describe('Header', () => {
  it('renders connect wallet by default and calls click handler', () => {
    const onConnect = vi.fn();
    render(<Header wallet={{ status: 'disconnected' }} onConnect={onConnect} />);

    const button = screen.getByRole('button', { name: 'Connect Wallet' });
    fireEvent.click(button);

    expect(onConnect).toHaveBeenCalledTimes(1);
  });
});
