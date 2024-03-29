// ==UserScript==
// @name     binki-atlassian-jira-log-work-ctrl-enter
// @version  1.0.0
// @match https://*.atlassian.net/*
// ==/UserScript==

document.body.addEventListener('keyup', e => {
  // Ignore already-handled.
  if (e.defaultPrevented) return;
  
  // Ignore composition
	if (e.isComposing || e.keyCode === 229) return;
  
  // Only match ctrl+enter
  if (!e.ctrlKey || e.key !== 'Enter') return;

  const logTimeDialogContentsElement = e.target.closest('[data-testid="issue.issue-view.common.log-time-modal-dialog.contents"]');
  // Only if we are in a log time dialog.
  if (!logTimeDialogContentsElement) return;
  
  // Click the Save button for us.
  document.querySelector('[data-testid="issue.common.component.log-time-modal.modal.footer.save-button"]').click();
});
