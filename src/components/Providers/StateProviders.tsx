import { ComponentProps } from 'react';
import IconStyleProvider from '@state/IconStyleProvider';
import IconSizeProvider from '@state/IconSizeProvider';
import ThemeProvider from '@state/ThemeProvider';
import ToastProvider from '@components/ToastProvider';
import SidebarDisplayProvider from '@state/SidebarDisplayProvider';
import AboutDialogDisplayProvider from '@/components/Providers/AboutDialogDisplayProvider';
import CopyModeProvider from '@state/CopyModeProvider';

interface StateProvidersProps extends ComponentProps<'div'> {
  theme: string;
}

export default function StateProviders({ theme, children }: StateProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <IconStyleProvider>
          <IconSizeProvider>
            <SidebarDisplayProvider>
              <AboutDialogDisplayProvider>
                <CopyModeProvider>{children}</CopyModeProvider>
              </AboutDialogDisplayProvider>
            </SidebarDisplayProvider>
          </IconSizeProvider>
        </IconStyleProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
